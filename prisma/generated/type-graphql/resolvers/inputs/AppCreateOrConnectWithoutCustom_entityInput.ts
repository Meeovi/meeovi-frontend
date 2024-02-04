import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutCustom_entityInput } from "../inputs/AppCreateWithoutCustom_entityInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutCustom_entityInput", {})
export class AppCreateOrConnectWithoutCustom_entityInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutCustom_entityInput, {
    nullable: false
  })
  create!: AppCreateWithoutCustom_entityInput;
}
