import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_order_extensionCreateManyInput } from "../../../inputs/Klarna_order_extensionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyKlarna_order_extensionArgs {
  @TypeGraphQL.Field(_type => [Klarna_order_extensionCreateManyInput], {
    nullable: false
  })
  data!: Klarna_order_extensionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
