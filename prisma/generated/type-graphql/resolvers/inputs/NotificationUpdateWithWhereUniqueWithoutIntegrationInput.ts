import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationUpdateWithoutIntegrationInput } from "../inputs/NotificationUpdateWithoutIntegrationInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateWithWhereUniqueWithoutIntegrationInput", {})
export class NotificationUpdateWithWhereUniqueWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutIntegrationInput, {
    nullable: false
  })
  data!: NotificationUpdateWithoutIntegrationInput;
}
