import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldCreateOrConnectWithoutProduct_search_config_fieldInput } from "../inputs/Custom_fieldCreateOrConnectWithoutProduct_search_config_fieldInput";
import { Custom_fieldCreateWithoutProduct_search_config_fieldInput } from "../inputs/Custom_fieldCreateWithoutProduct_search_config_fieldInput";
import { Custom_fieldWhereUniqueInput } from "../inputs/Custom_fieldWhereUniqueInput";

@TypeGraphQL.InputType("Custom_fieldCreateNestedOneWithoutProduct_search_config_fieldInput", {})
export class Custom_fieldCreateNestedOneWithoutProduct_search_config_fieldInput {
  @TypeGraphQL.Field(_type => Custom_fieldCreateWithoutProduct_search_config_fieldInput, {
    nullable: true
  })
  create?: Custom_fieldCreateWithoutProduct_search_config_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldCreateOrConnectWithoutProduct_search_config_fieldInput, {
    nullable: true
  })
  connectOrCreate?: Custom_fieldCreateOrConnectWithoutProduct_search_config_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldWhereUniqueInput, {
    nullable: true
  })
  connect?: Custom_fieldWhereUniqueInput | undefined;
}
