import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_flag_storageCreateInput } from "../../../inputs/Klaviyo_flag_storageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneKlaviyo_flag_storageArgs {
  @TypeGraphQL.Field(_type => Klaviyo_flag_storageCreateInput, {
    nullable: false
  })
  data!: Klaviyo_flag_storageCreateInput;
}
