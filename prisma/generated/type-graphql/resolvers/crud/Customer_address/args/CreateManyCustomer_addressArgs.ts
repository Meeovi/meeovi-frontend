import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_addressCreateManyInput } from "../../../inputs/Customer_addressCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomer_addressArgs {
  @TypeGraphQL.Field(_type => [Customer_addressCreateManyInput], {
    nullable: false
  })
  data!: Customer_addressCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
