import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutCustom_entityInput } from "../inputs/AppCreateOrConnectWithoutCustom_entityInput";
import { AppCreateWithoutCustom_entityInput } from "../inputs/AppCreateWithoutCustom_entityInput";
import { AppUpdateToOneWithWhereWithoutCustom_entityInput } from "../inputs/AppUpdateToOneWithWhereWithoutCustom_entityInput";
import { AppUpsertWithoutCustom_entityInput } from "../inputs/AppUpsertWithoutCustom_entityInput";
import { AppWhereInput } from "../inputs/AppWhereInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneWithoutCustom_entityNestedInput", {})
export class AppUpdateOneWithoutCustom_entityNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutCustom_entityInput, {
    nullable: true
  })
  create?: AppCreateWithoutCustom_entityInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutCustom_entityInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutCustom_entityInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutCustom_entityInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutCustom_entityInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  disconnect?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  delete?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutCustom_entityInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutCustom_entityInput | undefined;
}
