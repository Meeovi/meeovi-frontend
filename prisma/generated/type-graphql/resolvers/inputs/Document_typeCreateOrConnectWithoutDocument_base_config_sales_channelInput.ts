import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateWithoutDocument_base_config_sales_channelInput } from "../inputs/Document_typeCreateWithoutDocument_base_config_sales_channelInput";
import { Document_typeWhereUniqueInput } from "../inputs/Document_typeWhereUniqueInput";

@TypeGraphQL.InputType("Document_typeCreateOrConnectWithoutDocument_base_config_sales_channelInput", {})
export class Document_typeCreateOrConnectWithoutDocument_base_config_sales_channelInput {
  @TypeGraphQL.Field(_type => Document_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Document_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_typeCreateWithoutDocument_base_config_sales_channelInput, {
    nullable: false
  })
  create!: Document_typeCreateWithoutDocument_base_config_sales_channelInput;
}
