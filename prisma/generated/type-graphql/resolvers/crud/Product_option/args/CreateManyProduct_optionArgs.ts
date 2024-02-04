import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_optionCreateManyInput } from "../../../inputs/Product_optionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_optionArgs {
  @TypeGraphQL.Field(_type => [Product_optionCreateManyInput], {
    nullable: false
  })
  data!: Product_optionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
