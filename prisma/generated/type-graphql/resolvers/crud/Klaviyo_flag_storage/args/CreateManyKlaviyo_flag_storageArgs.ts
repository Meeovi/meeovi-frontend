import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_flag_storageCreateManyInput } from "../../../inputs/Klaviyo_flag_storageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyKlaviyo_flag_storageArgs {
  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageCreateManyInput], {
    nullable: false
  })
  data!: Klaviyo_flag_storageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
