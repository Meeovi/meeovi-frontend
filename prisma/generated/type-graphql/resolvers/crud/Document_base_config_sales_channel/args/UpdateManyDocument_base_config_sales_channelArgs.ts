import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_config_sales_channelUpdateManyMutationInput } from "../../../inputs/Document_base_config_sales_channelUpdateManyMutationInput";
import { Document_base_config_sales_channelWhereInput } from "../../../inputs/Document_base_config_sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDocument_base_config_sales_channelArgs {
  @TypeGraphQL.Field(_type => Document_base_config_sales_channelUpdateManyMutationInput, {
    nullable: false
  })
  data!: Document_base_config_sales_channelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereInput, {
    nullable: true
  })
  where?: Document_base_config_sales_channelWhereInput | undefined;
}
