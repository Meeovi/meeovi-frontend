import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_translationCreateManyInput } from "../../../inputs/Shipping_method_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShipping_method_translationArgs {
  @TypeGraphQL.Field(_type => [Shipping_method_translationCreateManyInput], {
    nullable: false
  })
  data!: Shipping_method_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
