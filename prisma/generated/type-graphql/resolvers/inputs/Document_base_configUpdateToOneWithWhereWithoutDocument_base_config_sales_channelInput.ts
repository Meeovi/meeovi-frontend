import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configUpdateWithoutDocument_base_config_sales_channelInput } from "../inputs/Document_base_configUpdateWithoutDocument_base_config_sales_channelInput";
import { Document_base_configWhereInput } from "../inputs/Document_base_configWhereInput";

@TypeGraphQL.InputType("Document_base_configUpdateToOneWithWhereWithoutDocument_base_config_sales_channelInput", {})
export class Document_base_configUpdateToOneWithWhereWithoutDocument_base_config_sales_channelInput {
  @TypeGraphQL.Field(_type => Document_base_configWhereInput, {
    nullable: true
  })
  where?: Document_base_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configUpdateWithoutDocument_base_config_sales_channelInput, {
    nullable: false
  })
  data!: Document_base_configUpdateWithoutDocument_base_config_sales_channelInput;
}
