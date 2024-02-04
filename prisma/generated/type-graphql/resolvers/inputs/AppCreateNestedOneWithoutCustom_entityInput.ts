import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutCustom_entityInput } from "../inputs/AppCreateOrConnectWithoutCustom_entityInput";
import { AppCreateWithoutCustom_entityInput } from "../inputs/AppCreateWithoutCustom_entityInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedOneWithoutCustom_entityInput", {})
export class AppCreateNestedOneWithoutCustom_entityInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutCustom_entityInput, {
    nullable: true
  })
  create?: AppCreateWithoutCustom_entityInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutCustom_entityInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutCustom_entityInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;
}
