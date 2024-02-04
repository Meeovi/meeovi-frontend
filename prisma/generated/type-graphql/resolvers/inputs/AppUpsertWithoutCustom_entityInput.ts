import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutCustom_entityInput } from "../inputs/AppCreateWithoutCustom_entityInput";
import { AppUpdateWithoutCustom_entityInput } from "../inputs/AppUpdateWithoutCustom_entityInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutCustom_entityInput", {})
export class AppUpsertWithoutCustom_entityInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutCustom_entityInput, {
    nullable: false
  })
  update!: AppUpdateWithoutCustom_entityInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutCustom_entityInput, {
    nullable: false
  })
  create!: AppCreateWithoutCustom_entityInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
