import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateManyAppInputEnvelope } from "../inputs/Custom_field_setCreateManyAppInputEnvelope";
import { Custom_field_setCreateOrConnectWithoutAppInput } from "../inputs/Custom_field_setCreateOrConnectWithoutAppInput";
import { Custom_field_setCreateWithoutAppInput } from "../inputs/Custom_field_setCreateWithoutAppInput";
import { Custom_field_setWhereUniqueInput } from "../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_setCreateNestedManyWithoutAppInput", {})
export class Custom_field_setCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [Custom_field_setCreateWithoutAppInput], {
    nullable: true
  })
  create?: Custom_field_setCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: Custom_field_setCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: Custom_field_setCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setWhereUniqueInput], {
    nullable: true
  })
  connect?: Custom_field_setWhereUniqueInput[] | undefined;
}
