import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateWithoutUserInput } from "../inputs/LocaleCreateWithoutUserInput";
import { LocaleUpdateWithoutUserInput } from "../inputs/LocaleUpdateWithoutUserInput";
import { LocaleWhereInput } from "../inputs/LocaleWhereInput";

@TypeGraphQL.InputType("LocaleUpsertWithoutUserInput", {})
export class LocaleUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => LocaleUpdateWithoutUserInput, {
    nullable: false
  })
  update!: LocaleUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => LocaleCreateWithoutUserInput, {
    nullable: false
  })
  create!: LocaleCreateWithoutUserInput;

  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;
}
