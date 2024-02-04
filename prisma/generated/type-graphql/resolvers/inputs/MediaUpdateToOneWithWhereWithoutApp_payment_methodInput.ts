import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutApp_payment_methodInput } from "../inputs/MediaUpdateWithoutApp_payment_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutApp_payment_methodInput", {})
export class MediaUpdateToOneWithWhereWithoutApp_payment_methodInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutApp_payment_methodInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutApp_payment_methodInput;
}
