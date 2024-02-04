import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateWithoutDocument_base_config_sales_channelInput } from "../inputs/Document_typeCreateWithoutDocument_base_config_sales_channelInput";
import { Document_typeUpdateWithoutDocument_base_config_sales_channelInput } from "../inputs/Document_typeUpdateWithoutDocument_base_config_sales_channelInput";
import { Document_typeWhereInput } from "../inputs/Document_typeWhereInput";

@TypeGraphQL.InputType("Document_typeUpsertWithoutDocument_base_config_sales_channelInput", {})
export class Document_typeUpsertWithoutDocument_base_config_sales_channelInput {
  @TypeGraphQL.Field(_type => Document_typeUpdateWithoutDocument_base_config_sales_channelInput, {
    nullable: false
  })
  update!: Document_typeUpdateWithoutDocument_base_config_sales_channelInput;

  @TypeGraphQL.Field(_type => Document_typeCreateWithoutDocument_base_config_sales_channelInput, {
    nullable: false
  })
  create!: Document_typeCreateWithoutDocument_base_config_sales_channelInput;

  @TypeGraphQL.Field(_type => Document_typeWhereInput, {
    nullable: true
  })
  where?: Document_typeWhereInput | undefined;
}
