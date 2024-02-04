import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutCustom_field_setInput } from "../inputs/AppCreateOrConnectWithoutCustom_field_setInput";
import { AppCreateWithoutCustom_field_setInput } from "../inputs/AppCreateWithoutCustom_field_setInput";
import { AppUpdateToOneWithWhereWithoutCustom_field_setInput } from "../inputs/AppUpdateToOneWithWhereWithoutCustom_field_setInput";
import { AppUpsertWithoutCustom_field_setInput } from "../inputs/AppUpsertWithoutCustom_field_setInput";
import { AppWhereInput } from "../inputs/AppWhereInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneWithoutCustom_field_setNestedInput", {})
export class AppUpdateOneWithoutCustom_field_setNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutCustom_field_setInput, {
    nullable: true
  })
  create?: AppCreateWithoutCustom_field_setInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutCustom_field_setInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutCustom_field_setInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutCustom_field_setInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutCustom_field_setInput | undefined;

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

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutCustom_field_setInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutCustom_field_setInput | undefined;
}
