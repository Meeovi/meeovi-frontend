import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_tagCreateManyInput } from "../../../inputs/Shipping_method_tagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShipping_method_tagArgs {
  @TypeGraphQL.Field(_type => [Shipping_method_tagCreateManyInput], {
    nullable: false
  })
  data!: Shipping_method_tagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
