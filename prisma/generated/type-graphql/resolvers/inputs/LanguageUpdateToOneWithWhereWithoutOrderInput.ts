import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutOrderInput } from "../inputs/LanguageUpdateWithoutOrderInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutOrderInput", {})
export class LanguageUpdateToOneWithWhereWithoutOrderInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutOrderInput;
}
