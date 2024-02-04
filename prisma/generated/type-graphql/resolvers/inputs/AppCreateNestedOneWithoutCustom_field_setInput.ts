import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutCustom_field_setInput } from "../inputs/AppCreateOrConnectWithoutCustom_field_setInput";
import { AppCreateWithoutCustom_field_setInput } from "../inputs/AppCreateWithoutCustom_field_setInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedOneWithoutCustom_field_setInput", {})
export class AppCreateNestedOneWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutCustom_field_setInput, {
    nullable: true
  })
  create?: AppCreateWithoutCustom_field_setInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutCustom_field_setInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutCustom_field_setInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;
}
