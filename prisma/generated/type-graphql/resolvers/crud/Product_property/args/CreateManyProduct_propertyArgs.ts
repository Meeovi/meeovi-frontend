import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_propertyCreateManyInput } from "../../../inputs/Product_propertyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_propertyArgs {
  @TypeGraphQL.Field(_type => [Product_propertyCreateManyInput], {
    nullable: false
  })
  data!: Product_propertyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
