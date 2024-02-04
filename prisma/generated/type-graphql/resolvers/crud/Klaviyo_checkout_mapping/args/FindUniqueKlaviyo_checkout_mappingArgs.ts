import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_checkout_mappingWhereUniqueInput } from "../../../inputs/Klaviyo_checkout_mappingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueKlaviyo_checkout_mappingArgs {
  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_checkout_mappingWhereUniqueInput;
}
