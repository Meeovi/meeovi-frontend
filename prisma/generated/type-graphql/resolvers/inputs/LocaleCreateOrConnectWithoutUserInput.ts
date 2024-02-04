import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateWithoutUserInput } from "../inputs/LocaleCreateWithoutUserInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleCreateOrConnectWithoutUserInput", {})
export class LocaleCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: false
  })
  where!: LocaleWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocaleCreateWithoutUserInput, {
    nullable: false
  })
  create!: LocaleCreateWithoutUserInput;
}
