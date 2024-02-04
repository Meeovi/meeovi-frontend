import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_checkout_mappingWhereInput } from "../../../inputs/Klaviyo_checkout_mappingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyKlaviyo_checkout_mappingArgs {
  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingWhereInput, {
    nullable: true
  })
  where?: Klaviyo_checkout_mappingWhereInput | undefined;
}
