import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_checkout_mappingCreateManyInput } from "../../../inputs/Klaviyo_checkout_mappingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyKlaviyo_checkout_mappingArgs {
  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingCreateManyInput], {
    nullable: false
  })
  data!: Klaviyo_checkout_mappingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
