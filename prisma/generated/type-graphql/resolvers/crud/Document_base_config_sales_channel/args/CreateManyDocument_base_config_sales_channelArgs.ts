import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_config_sales_channelCreateManyInput } from "../../../inputs/Document_base_config_sales_channelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDocument_base_config_sales_channelArgs {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelCreateManyInput], {
    nullable: false
  })
  data!: Document_base_config_sales_channelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
