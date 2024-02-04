import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutCustom_entityInput } from "../inputs/AppUpdateWithoutCustom_entityInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutCustom_entityInput", {})
export class AppUpdateToOneWithWhereWithoutCustom_entityInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutCustom_entityInput, {
    nullable: false
  })
  data!: AppUpdateWithoutCustom_entityInput;
}
