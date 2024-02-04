import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCreateManyDocument_base_configInput } from "../inputs/Document_base_config_sales_channelCreateManyDocument_base_configInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelCreateManyDocument_base_configInputEnvelope", {})
export class Document_base_config_sales_channelCreateManyDocument_base_configInputEnvelope {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateManyDocument_base_configInput], {
    nullable: false
  })
  data!: Document_base_config_sales_channelCreateManyDocument_base_configInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
