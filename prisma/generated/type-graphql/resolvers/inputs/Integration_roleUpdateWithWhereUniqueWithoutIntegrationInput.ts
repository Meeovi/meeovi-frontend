import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleUpdateWithoutIntegrationInput } from "../inputs/Integration_roleUpdateWithoutIntegrationInput";
import { Integration_roleWhereUniqueInput } from "../inputs/Integration_roleWhereUniqueInput";

@TypeGraphQL.InputType("Integration_roleUpdateWithWhereUniqueWithoutIntegrationInput", {})
export class Integration_roleUpdateWithWhereUniqueWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => Integration_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Integration_roleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Integration_roleUpdateWithoutIntegrationInput, {
    nullable: false
  })
  data!: Integration_roleUpdateWithoutIntegrationInput;
}
