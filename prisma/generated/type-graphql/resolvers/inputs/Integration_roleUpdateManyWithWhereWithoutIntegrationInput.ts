import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleScalarWhereInput } from "../inputs/Integration_roleScalarWhereInput";
import { Integration_roleUpdateManyMutationInput } from "../inputs/Integration_roleUpdateManyMutationInput";

@TypeGraphQL.InputType("Integration_roleUpdateManyWithWhereWithoutIntegrationInput", {})
export class Integration_roleUpdateManyWithWhereWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => Integration_roleScalarWhereInput, {
    nullable: false
  })
  where!: Integration_roleScalarWhereInput;

  @TypeGraphQL.Field(_type => Integration_roleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Integration_roleUpdateManyMutationInput;
}
