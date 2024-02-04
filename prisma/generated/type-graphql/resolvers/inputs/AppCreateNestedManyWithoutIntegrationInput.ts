import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateManyIntegrationInputEnvelope } from "../inputs/AppCreateManyIntegrationInputEnvelope";
import { AppCreateOrConnectWithoutIntegrationInput } from "../inputs/AppCreateOrConnectWithoutIntegrationInput";
import { AppCreateWithoutIntegrationInput } from "../inputs/AppCreateWithoutIntegrationInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedManyWithoutIntegrationInput", {})
export class AppCreateNestedManyWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => [AppCreateWithoutIntegrationInput], {
    nullable: true
  })
  create?: AppCreateWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppCreateOrConnectWithoutIntegrationInput], {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => AppCreateManyIntegrationInputEnvelope, {
    nullable: true
  })
  createMany?: AppCreateManyIntegrationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  connect?: AppWhereUniqueInput[] | undefined;
}
