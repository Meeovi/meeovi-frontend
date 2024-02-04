import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldCreateOrConnectWithoutProduct_search_config_fieldInput } from "../inputs/Custom_fieldCreateOrConnectWithoutProduct_search_config_fieldInput";
import { Custom_fieldCreateWithoutProduct_search_config_fieldInput } from "../inputs/Custom_fieldCreateWithoutProduct_search_config_fieldInput";
import { Custom_fieldUpdateToOneWithWhereWithoutProduct_search_config_fieldInput } from "../inputs/Custom_fieldUpdateToOneWithWhereWithoutProduct_search_config_fieldInput";
import { Custom_fieldUpsertWithoutProduct_search_config_fieldInput } from "../inputs/Custom_fieldUpsertWithoutProduct_search_config_fieldInput";
import { Custom_fieldWhereInput } from "../inputs/Custom_fieldWhereInput";
import { Custom_fieldWhereUniqueInput } from "../inputs/Custom_fieldWhereUniqueInput";

@TypeGraphQL.InputType("Custom_fieldUpdateOneWithoutProduct_search_config_fieldNestedInput", {})
export class Custom_fieldUpdateOneWithoutProduct_search_config_fieldNestedInput {
  @TypeGraphQL.Field(_type => Custom_fieldCreateWithoutProduct_search_config_fieldInput, {
    nullable: true
  })
  create?: Custom_fieldCreateWithoutProduct_search_config_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldCreateOrConnectWithoutProduct_search_config_fieldInput, {
    nullable: true
  })
  connectOrCreate?: Custom_fieldCreateOrConnectWithoutProduct_search_config_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldUpsertWithoutProduct_search_config_fieldInput, {
    nullable: true
  })
  upsert?: Custom_fieldUpsertWithoutProduct_search_config_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldWhereInput, {
    nullable: true
  })
  disconnect?: Custom_fieldWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldWhereInput, {
    nullable: true
  })
  delete?: Custom_fieldWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldWhereUniqueInput, {
    nullable: true
  })
  connect?: Custom_fieldWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldUpdateToOneWithWhereWithoutProduct_search_config_fieldInput, {
    nullable: true
  })
  update?: Custom_fieldUpdateToOneWithWhereWithoutProduct_search_config_fieldInput | undefined;
}
