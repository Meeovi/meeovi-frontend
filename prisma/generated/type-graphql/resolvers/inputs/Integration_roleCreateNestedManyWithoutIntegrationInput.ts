import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleCreateManyIntegrationInputEnvelope } from "../inputs/Integration_roleCreateManyIntegrationInputEnvelope";
import { Integration_roleCreateOrConnectWithoutIntegrationInput } from "../inputs/Integration_roleCreateOrConnectWithoutIntegrationInput";
import { Integration_roleCreateWithoutIntegrationInput } from "../inputs/Integration_roleCreateWithoutIntegrationInput";
import { Integration_roleWhereUniqueInput } from "../inputs/Integration_roleWhereUniqueInput";

@TypeGraphQL.InputType("Integration_roleCreateNestedManyWithoutIntegrationInput", {})
export class Integration_roleCreateNestedManyWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => [Integration_roleCreateWithoutIntegrationInput], {
    nullable: true
  })
  create?: Integration_roleCreateWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleCreateOrConnectWithoutIntegrationInput], {
    nullable: true
  })
  connectOrCreate?: Integration_roleCreateOrConnectWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => Integration_roleCreateManyIntegrationInputEnvelope, {
    nullable: true
  })
  createMany?: Integration_roleCreateManyIntegrationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereUniqueInput], {
    nullable: true
  })
  connect?: Integration_roleWhereUniqueInput[] | undefined;
}
