import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCreateManyDocument_typeInput } from "../inputs/Document_base_config_sales_channelCreateManyDocument_typeInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelCreateManyDocument_typeInputEnvelope", {})
export class Document_base_config_sales_channelCreateManyDocument_typeInputEnvelope {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateManyDocument_typeInput], {
    nullable: false
  })
  data!: Document_base_config_sales_channelCreateManyDocument_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
