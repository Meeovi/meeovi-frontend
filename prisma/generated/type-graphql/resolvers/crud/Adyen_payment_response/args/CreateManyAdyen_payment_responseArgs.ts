import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_responseCreateManyInput } from "../../../inputs/Adyen_payment_responseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAdyen_payment_responseArgs {
  @TypeGraphQL.Field(_type => [Adyen_payment_responseCreateManyInput], {
    nullable: false
  })
  data!: Adyen_payment_responseCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
