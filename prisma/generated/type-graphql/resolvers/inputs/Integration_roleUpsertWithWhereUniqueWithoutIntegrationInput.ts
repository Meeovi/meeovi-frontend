import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleCreateWithoutIntegrationInput } from "../inputs/Integration_roleCreateWithoutIntegrationInput";
import { Integration_roleUpdateWithoutIntegrationInput } from "../inputs/Integration_roleUpdateWithoutIntegrationInput";
import { Integration_roleWhereUniqueInput } from "../inputs/Integration_roleWhereUniqueInput";

@TypeGraphQL.InputType("Integration_roleUpsertWithWhereUniqueWithoutIntegrationInput", {})
export class Integration_roleUpsertWithWhereUniqueWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => Integration_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Integration_roleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Integration_roleUpdateWithoutIntegrationInput, {
    nullable: false
  })
  update!: Integration_roleUpdateWithoutIntegrationInput;

  @TypeGraphQL.Field(_type => Integration_roleCreateWithoutIntegrationInput, {
    nullable: false
  })
  create!: Integration_roleCreateWithoutIntegrationInput;
}
