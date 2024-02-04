import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutOrderInput } from "../inputs/LanguageCreateWithoutOrderInput";
import { LanguageUpdateWithoutOrderInput } from "../inputs/LanguageUpdateWithoutOrderInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutOrderInput", {})
export class LanguageUpsertWithoutOrderInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutOrderInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutOrderInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
