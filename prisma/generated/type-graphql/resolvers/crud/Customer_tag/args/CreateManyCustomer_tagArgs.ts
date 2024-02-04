import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_tagCreateManyInput } from "../../../inputs/Customer_tagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomer_tagArgs {
  @TypeGraphQL.Field(_type => [Customer_tagCreateManyInput], {
    nullable: false
  })
  data!: Customer_tagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
