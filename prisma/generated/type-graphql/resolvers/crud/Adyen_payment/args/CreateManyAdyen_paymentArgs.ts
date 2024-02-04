import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_paymentCreateManyInput } from "../../../inputs/Adyen_paymentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAdyen_paymentArgs {
  @TypeGraphQL.Field(_type => [Adyen_paymentCreateManyInput], {
    nullable: false
  })
  data!: Adyen_paymentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
