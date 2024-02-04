import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyIntegrationInputEnvelope } from "../inputs/NotificationCreateManyIntegrationInputEnvelope";
import { NotificationCreateOrConnectWithoutIntegrationInput } from "../inputs/NotificationCreateOrConnectWithoutIntegrationInput";
import { NotificationCreateWithoutIntegrationInput } from "../inputs/NotificationCreateWithoutIntegrationInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateNestedManyWithoutIntegrationInput", {})
export class NotificationCreateNestedManyWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutIntegrationInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutIntegrationInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyIntegrationInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyIntegrationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;
}
