import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateOrConnectWithoutProduct_custom_field_setInput } from "../inputs/Custom_field_setCreateOrConnectWithoutProduct_custom_field_setInput";
import { Custom_field_setCreateWithoutProduct_custom_field_setInput } from "../inputs/Custom_field_setCreateWithoutProduct_custom_field_setInput";
import { Custom_field_setUpdateToOneWithWhereWithoutProduct_custom_field_setInput } from "../inputs/Custom_field_setUpdateToOneWithWhereWithoutProduct_custom_field_setInput";
import { Custom_field_setUpsertWithoutProduct_custom_field_setInput } from "../inputs/Custom_field_setUpsertWithoutProduct_custom_field_setInput";
import { Custom_field_setWhereUniqueInput } from "../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_setUpdateOneRequiredWithoutProduct_custom_field_setNestedInput", {})
export class Custom_field_setUpdateOneRequiredWithoutProduct_custom_field_setNestedInput {
  @TypeGraphQL.Field(_type => Custom_field_setCreateWithoutProduct_custom_field_setInput, {
    nullable: true
  })
  create?: Custom_field_setCreateWithoutProduct_custom_field_setInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setCreateOrConnectWithoutProduct_custom_field_setInput, {
    nullable: true
  })
  connectOrCreate?: Custom_field_setCreateOrConnectWithoutProduct_custom_field_setInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setUpsertWithoutProduct_custom_field_setInput, {
    nullable: true
  })
  upsert?: Custom_field_setUpsertWithoutProduct_custom_field_setInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setWhereUniqueInput, {
    nullable: true
  })
  connect?: Custom_field_setWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setUpdateToOneWithWhereWithoutProduct_custom_field_setInput, {
    nullable: true
  })
  update?: Custom_field_setUpdateToOneWithWhereWithoutProduct_custom_field_setInput | undefined;
}
