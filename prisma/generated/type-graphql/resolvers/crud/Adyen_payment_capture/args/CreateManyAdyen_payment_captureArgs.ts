import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_captureCreateManyInput } from "../../../inputs/Adyen_payment_captureCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAdyen_payment_captureArgs {
  @TypeGraphQL.Field(_type => [Adyen_payment_captureCreateManyInput], {
    nullable: false
  })
  data!: Adyen_payment_captureCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
