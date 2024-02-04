import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutIntegrationInput } from "../inputs/AppUpdateWithoutIntegrationInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateWithWhereUniqueWithoutIntegrationInput", {})
export class AppUpdateWithWhereUniqueWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppUpdateWithoutIntegrationInput, {
    nullable: false
  })
  data!: AppUpdateWithoutIntegrationInput;
}
