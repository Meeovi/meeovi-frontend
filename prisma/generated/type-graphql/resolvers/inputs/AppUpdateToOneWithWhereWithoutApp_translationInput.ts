import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutApp_translationInput } from "../inputs/AppUpdateWithoutApp_translationInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutApp_translationInput", {})
export class AppUpdateToOneWithWhereWithoutApp_translationInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_translationInput, {
    nullable: false
  })
  data!: AppUpdateWithoutApp_translationInput;
}
