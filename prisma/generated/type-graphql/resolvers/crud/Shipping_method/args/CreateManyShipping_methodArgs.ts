import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_methodCreateManyInput } from "../../../inputs/Shipping_methodCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShipping_methodArgs {
  @TypeGraphQL.Field(_type => [Shipping_methodCreateManyInput], {
    nullable: false
  })
  data!: Shipping_methodCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
