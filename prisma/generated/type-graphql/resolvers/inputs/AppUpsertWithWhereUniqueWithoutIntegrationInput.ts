import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutIntegrationInput } from "../inputs/AppCreateWithoutIntegrationInput";
import { AppUpdateWithoutIntegrationInput } from "../inputs/AppUpdateWithoutIntegrationInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpsertWithWhereUniqueWithoutIntegrationInput", {})
export class AppUpsertWithWhereUniqueWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppUpdateWithoutIntegrationInput, {
    nullable: false
  })
  update!: AppUpdateWithoutIntegrationInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutIntegrationInput, {
    nullable: false
  })
  create!: AppCreateWithoutIntegrationInput;
}
