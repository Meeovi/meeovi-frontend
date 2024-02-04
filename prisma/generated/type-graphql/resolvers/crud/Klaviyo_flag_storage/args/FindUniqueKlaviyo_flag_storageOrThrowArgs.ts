import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_flag_storageWhereUniqueInput } from "../../../inputs/Klaviyo_flag_storageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueKlaviyo_flag_storageOrThrowArgs {
  @TypeGraphQL.Field(_type => Klaviyo_flag_storageWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_flag_storageWhereUniqueInput;
}
