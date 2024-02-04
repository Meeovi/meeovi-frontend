import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCreateManySales_channelInput } from "../inputs/Document_base_config_sales_channelCreateManySales_channelInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelCreateManySales_channelInputEnvelope", {})
export class Document_base_config_sales_channelCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateManySales_channelInput], {
    nullable: false
  })
  data!: Document_base_config_sales_channelCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
