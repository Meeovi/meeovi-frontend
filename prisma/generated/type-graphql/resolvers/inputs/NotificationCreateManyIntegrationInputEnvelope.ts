import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyIntegrationInput } from "../inputs/NotificationCreateManyIntegrationInput";

@TypeGraphQL.InputType("NotificationCreateManyIntegrationInputEnvelope", {})
export class NotificationCreateManyIntegrationInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationCreateManyIntegrationInput], {
    nullable: false
  })
  data!: NotificationCreateManyIntegrationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
