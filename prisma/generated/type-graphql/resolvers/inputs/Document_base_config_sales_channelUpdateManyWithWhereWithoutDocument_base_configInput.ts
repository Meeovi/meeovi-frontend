import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelScalarWhereInput } from "../inputs/Document_base_config_sales_channelScalarWhereInput";
import { Document_base_config_sales_channelUpdateManyMutationInput } from "../inputs/Document_base_config_sales_channelUpdateManyMutationInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelUpdateManyWithWhereWithoutDocument_base_configInput", {})
export class Document_base_config_sales_channelUpdateManyWithWhereWithoutDocument_base_configInput {
  @TypeGraphQL.Field(_type => Document_base_config_sales_channelScalarWhereInput, {
    nullable: false
  })
  where!: Document_base_config_sales_channelScalarWhereInput;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelUpdateManyMutationInput, {
    nullable: false
  })
  data!: Document_base_config_sales_channelUpdateManyMutationInput;
}
