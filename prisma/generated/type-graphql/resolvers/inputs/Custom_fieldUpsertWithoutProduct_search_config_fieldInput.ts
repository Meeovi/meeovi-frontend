import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldCreateWithoutProduct_search_config_fieldInput } from "../inputs/Custom_fieldCreateWithoutProduct_search_config_fieldInput";
import { Custom_fieldUpdateWithoutProduct_search_config_fieldInput } from "../inputs/Custom_fieldUpdateWithoutProduct_search_config_fieldInput";
import { Custom_fieldWhereInput } from "../inputs/Custom_fieldWhereInput";

@TypeGraphQL.InputType("Custom_fieldUpsertWithoutProduct_search_config_fieldInput", {})
export class Custom_fieldUpsertWithoutProduct_search_config_fieldInput {
  @TypeGraphQL.Field(_type => Custom_fieldUpdateWithoutProduct_search_config_fieldInput, {
    nullable: false
  })
  update!: Custom_fieldUpdateWithoutProduct_search_config_fieldInput;

  @TypeGraphQL.Field(_type => Custom_fieldCreateWithoutProduct_search_config_fieldInput, {
    nullable: false
  })
  create!: Custom_fieldCreateWithoutProduct_search_config_fieldInput;

  @TypeGraphQL.Field(_type => Custom_fieldWhereInput, {
    nullable: true
  })
  where?: Custom_fieldWhereInput | undefined;
}
