import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutPayment_methodInput } from "../inputs/MediaUpdateWithoutPayment_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutPayment_methodInput", {})
export class MediaUpdateToOneWithWhereWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutPayment_methodInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutPayment_methodInput;
}
